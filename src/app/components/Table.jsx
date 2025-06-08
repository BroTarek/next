const Table = ({ subscriptionTrackerData }) => {
  return <>
   
    <table>
        <thead>
          <tr>
            <th>ID</th>
            
            <th>Name</th>
            
            <th>Category</th>
            <th>Amount</th>
            
            <th>Created at</th>
            
            <th>Currency</th>
            
            <th>Status</th>
            
            <th>NextBillingDate</th>
            
            
          </tr>
        </thead>

        <tbody>
            {subscriptionTrackerData.subscriptions.map(subscription=>(
                <tr key={subscription.id}>
                    

                    <td>{subscription.name}</td>

                    <td>{subscription.category}</td>

                    <td>{subscription.amount}</td>

                    <td>{subscription.createdAt}</td>

                    <td>{subscription.currency}</td>

                    <td>{subscription.status}</td>

                    <td>{subscription.nextBillingDate}</td>

                </tr>
            ))}
        </tbody>
    </table>
  
  </>;
};

export default Table;
/*

id: "sub_002",
        name: "Spotify",
        category: "Music",
        amount: 9.99,
        currency: "USD",
        billingCycle: "monthly",
        nextBillingDate: "2025-06-10",
        status: "active",
        createdAt: "2024-01-10T12:30:00Z",
        */