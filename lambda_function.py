import json


def response(status_code, success, message):
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps({
            "success": success,
            "message": message
        })
    }


def lambda_handler(event, context):

    print("Received event:")
    print(json.dumps(event))

    try:

        # Get request body
        body = event.get("body", {})

        # API Gateway normally sends body as a string
        if isinstance(body, str):
            body = json.loads(body)

        # Extract fields
        name = body.get("name", "").strip()
        email = body.get("email", "").strip()
        feedback = body.get("feedback", "").strip()

        print("Name:", name)
        print("Email:", email)
        print("Feedback:", feedback)

        # Validation
        if not name:
            return response(
                400,
                False,
                "Name is required"
            )

        if not email:
            return response(
                400,
                False,
                "Email is required"
            )

        if not feedback:
            return response(
                400,
                False,
                "Feedback is required"
            )

        # Success
        return response(
            200,
            True,
            "Feedback submitted successfully"
        )

    except Exception as e:

        print("ERROR:", str(e))

        return response(
            500,
            False,
            "Internal server error"
        )