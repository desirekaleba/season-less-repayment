# season-less-repayment
Each season, clients purchase products on credit, and over the course of a season, they repay their credit, and so clients have credit associated with them on a season-by-season basis. In our data model, we associate a client’s payments with a season for which they have outstanding credit. These payments are made either through cash to a Field Officer or through a mobile money platform (ex. M-Pesa). A member of our HQ staff then takes a list of payments that clients have made, and uploads them into our application, which saves each payment, and each payment must be associated with the correct client and season in our database. When a client makes a payment, we need to know which season the payment will be applied to, as sometimes clients can have outstanding credit (debt) in more than one season. Traditionally, we required each payment in a payment upload to be associated with a season, so that the application doesn’t have to figure out to which season(s) the client’s payment needs to be applied to. But to make it easier on clients, Field Officers, and HQ staff, we’re moving away from this model, and dropping the requirement that seasons must be associated with each payment contained in a list of payment uploads. Since we still require that each saved repayment must be associated with a season in our database, this means we need ‘seasonless repayment’ logic to dynamically determine which season(s) the client’s payment should be applied to.