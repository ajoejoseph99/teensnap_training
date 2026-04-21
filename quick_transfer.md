### User Story: Instant Peer-to-Peer Transfer
**As a** mobile banking user,
**I want to** send money instantly to my saved contacts using their phone number,
**So that** I can split bills or pay friends without entering bank details.

**Acceptance Criteria:**
1. The user must select a contact from their "Saved Contacts" list.
2. The transfer amount must be greater than $1.00 and less than or equal to $5,000.00.
3. The system must verify the user has a sufficient "Available Balance" before processing.
4. For transfers over $500.00, the user must provide Biometric (FaceID/Fingerprint) or PIN confirmation.
5. Upon completion, both the sender and recipient must receive a push notification.
6. If the contact's phone number is no longer active in the system, show a "Recipient Unavailable" error.
