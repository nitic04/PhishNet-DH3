import email
import os
from spellchecker import SpellChecker

trusted_emails = ['no-reply@accounts.google.com', 'support@google.com', 'support@paypal.com', 'support@amazon.com','account-security-noreply@accountprotection.microsoft.com', 'support@apple.com','noreply@id.apple.com', 'support@netflix.com', 'support@twitter.com']

trusted_urls = ['www.apple.ca', 'www.apple.com', 'www.paypal.com', 'amazon.ca','microsoft.com', 'tesla.com', 'netflix.com']

criteria = {"Verified Sender": True, "No Typos": True, "Generic Greeting": True, "Verified Website": True}


def check_scam_likeliness(eml_file_path):
    with open(eml_file_path, 'r') as f:
        eml_content = f.read()
        msg = email.message_from_string(eml_content)
        sender = "<" + str(msg['From']) + ">"
        subject = msg['Subject']
        body = ""

    if msg.is_multipart():
        body = ""
        for part in msg.walk():
            content_type = part.get_content_type()
            content_disposition = str(part.get('Content-Disposition'))

            if content_type == 'text/plain' and 'attachment' not in content_disposition:
                body += part.get_payload(decode=True).decode('utf-8', 'ignore')
            elif content_type == 'text/html' and 'attachment' not in content_disposition:
                body += part.get_payload(decode=True).decode('utf-8', 'ignore')
    else:
        body = msg.get_payload(decode=True).decode('utf-8', 'ignore')

    if not os.path.exists(eml_file_path):
        print("EML file not found.")

    valid_score = 100
    trusted_emails_count = 0
    for address in trusted_emails:
        if address in sender:
            trusted_emails_count += 1

    if trusted_emails_count == 0:
        valid_score -= 5
        criteria["Verified Sender"] = False

    print(valid_score)

    if msg.__contains__("Dear Customer"):
        valid_score -= 10
        criteria["Generic Greeting"] = False

    if msg.__contains__("http://") or msg.__contains__("www."):
        for website in trusted_urls:
            if website not in msg:
                valid_score -= 5
                criteria["Valid Website"] = False


    spell = SpellChecker()
    words = subject.split()
    typos = []
    for word in words:
        if not spell.correction(word.lower()) == word.lower():
            typos.append(word)

    if len(typos) > 3:
        valid_score -= 5
        criteria["No Typos"] = False

    num_of_false = 0
    for value in criteria.values():
        if value == False:
            num_of_false += 1

    if num_of_false > 2:
        valid_score -= 5
    elif num_of_false > 3:
        valid_score -= 10
    elif num_of_false == 4:
        valid_score -= 20

    return valid_score


check_scam_likeliness("potato.eml")
