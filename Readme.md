# ChangeApp

## Epic
- As a user
 - I want my payment transactions to be examined,
 - So that the rounding differences in them can be summed and donated to causes of my choice.

## First Thin Slice of Functionality - Stories
These assume the following: 
- A holding account (pre-donation) will be "hard-coded" into the application. The application only cares about getting money into this account.
- A single payment account is set up for performing the donations. Payment from multiple sources (possibly each respective rounding source) would be a future consideration.

NOTE: for the payment account, another option, to simplify the first pass at the application, would be to simply have payment entered whenever a donation is triggered.

NOTE: for the holding account, it's possible that payments to causes would start out as a manual process, and eventually become automated.

The tech and user stories described below should be sufficient to accomplish a thin slice of the above epic.
That is, if user interaction is provided to setup the right configuration, the simple background task loop can continually run and kick off donations. 

## Tech Stories
These stories mostly deal with parts of the application that the user will not interact with.
The assumption here is that preset configuration values will be provided through user interaction, covered in user stories.

### Tech - Main, Scheduled Loop (Ex. every 5 minutes)
- Given a list of new transactions requested from a *transaction service*
 - It determine the round-up differences and come up with a lump sum for donation.
 - It sends that lump sum to the *donation service*

### Tech - Donation Processing (*donation service*)
- Given a lump donation amount
- and given *preset configuration* for a holding account
- and given *preset configuration* for a payment account
 - It adds the donation amount to a running total
 - And if the running total passes a threshold,
  - It make payments from the payment account, for the amount in the running total, to the holding account

### Tech - Transaction processing (*transaction service*)
- Given a request to retrieve the most recent transactions
- and given *preset configuration* on what accounts/payment methods are being tracked
 - It returns the most recent list of transactions for all accounts
 
### Tech - Holding account setup
- TBD

## User stories
These stories cover the main user interactions that must occur to provide preset configuration for the technical background tasks.
These can definitely be fleshed out more and/or replaced with the UX journey that was already created.
The main point of these stories is to make sure that the minimum set of *preset configuration* is provided to the technical, background tasks.

### User - Payment account setup
#### Payment method association
- As an application user
 - I want to be able to configure my main payment account,
 - And have this associated with my application account,
 - So when my donations occur, payments will be drawn from this account.

#### Privacy concerns
- As an application user
 - I don't want my payment details stored with the application,
 - So I don't have to worry about losing my personal data.

### User - Cause customization setup
#### Interest association
- As an application user
 - I want to be able to specify my causes/non-profits interests,
 - And have these associated with my application account,
 - So I get a tailored feed of causes.

#### Social association
- As an application user
 - I want to be able to specify my friends/social network,
 - And have these associated with my application account,
 - So I get a tailored feed of causes.

#### Cause association
- As an application user
 - I want to be able to select multiple causes from my feed,
 - And have these associated with my application account,
 - So when my donations occur, payments will go toward these causes (eventually).
 
### User - Transaction history setup
#### Tracking of bank/payment card accounts
- As an application user
 - I want to be able to authorize the application to get my transaction history from multiple accounts,
 - And have them associated with my application account,
 - So when my transaction history is checked, those accounts will be included in the check.

#### Privacy concerns 
- As an application user
 - I don't want my account details (account number, CC numbers) to be stored with the application,
 - So I don't have to worry about losing my personal data.
 
### Implementation Details
#### Donation Service
The donation service is going to need to make a payment to a holding account using an account that is associated with the application user.

This will require it to interface with at least a payment service/API, as well as a service/API for providing the payment authorization to this account.
Further research on this is pending, but it recommended that the same service/API is used for both, to avoid having to store accou

#### Transaction History Service
The transaction history service is going to need to get transaction details for an application user. At minimum, this should be a list of charge amounts.

This will require it to interface with one or more bank accounts or payment services. 
Due to the great variety in financial provider APIs, it is recommended that an aggregator service is utilized.
An aggregator service would provide the user with the ability to authorize the application to access many different transaction histories without having to store account information in the application.
Additionaly, the aggregator service would provide a unified API for the application to call upon.

There are a variety of services available for this:
- [Plaid](https://plaid.com/docs/#api-overview)
- [Intuit](https://developer.intuit.com/apis)
- [Yodlee](https://developer.yodlee.com/Aggregation_API/Aggregation_Services_Guide/Aggregation_REST_API_Reference)
