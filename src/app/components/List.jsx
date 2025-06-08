const List=({subscriptionTrackerData})=>{
    
      return (
        <>
          <h1>{subscriptionTrackerData.user.name}'s Subscriptions</h1>
          <ul>
            {subscriptionTrackerData.subscriptions.map((subscription) => (
              <li key={subscription.id}><strong>Name:</strong> {subscription.name}
                <ul type="star">
                  
                  <li><strong>Amount:</strong> {subscription.amount}</li>
                  <li><strong>Currency:</strong> {subscription.currency}</li>
                  <li><strong>Billing Cycle:</strong> {subscription.billingCycle}</li>
                  <li><strong>Next Billing Date:</strong> {subscription.nextBillingDate}</li>
                  <li><strong>Status:</strong> {subscription.status}</li>
                  <li><strong>Started At:</strong> {subscription.createdAt}</li>
                </ul>
              </li>
            ))}
          </ul>
        </>
      );
}

export default List;