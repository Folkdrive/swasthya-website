<?php
/**
 * Swasthya Food Consulting - Contact Form Handler
 * Send inquiry emails using PHP mail() function
 */

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Configuration
    $to_email = "thammaiah.nd@gmail.com";
    $subject_prefix = "New Inquiry: Swasthya Food Consulting";
    
    // Sanitize and collect input data
    $first_name = filter_var(trim($_POST["first_name"]), FILTER_SANITIZE_STRING);
    $last_name = filter_var(trim($_POST["last_name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $service = filter_var(trim($_POST["service"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);
    
    // Basic validation
    if (empty($first_name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }
    
    // Prepare email content
    $full_name = $first_name . ($last_name ? " " . $last_name : "");
    $subject = $subject_prefix . ($service ? " - " . ucfirst($service) : "");
    
    $email_content = "Name: $full_name\n";
    $email_content .= "Email: $email\n";
    if ($service) {
        $email_content .= "Area of Interest: $service\n";
    }
    $email_content .= "\nMessage:\n$message\n";
    
    // Email headers
    $headers = "From: $full_name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to_email, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Your message has been sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong, and we couldn't send your message."]);
    }
    
} else {
    // Not a POST request
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
