/**
 * 1: install stripe and react stripe js
 * 2: create a checkout form with card element(card element contains: card number, expiration date,cvs, zip code )
 * 3: Create account on stripe and get publishable key
 * 4: get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 7.On the server site install stripe:
 * 8.create a payment intent api with payment method types: ['card']
 * 9.Make sure you provide amount in cents(price*100)
 * 10. call payment intent api to get client secret and store it in a state
 * 11. use confirm card payment api with client secret and card info
 * 12. Display confirm card error
 * 13. Display confirm card success.
 * 14.Do things after payment --->
 * 
 * */ 