export async function getAllCustomers(data = {}) {
    return await fetch(`/customers`)
      .then(res => res.json())
      .then(data => data)
      .catch(error => {
        console.error(error);
      });
  }
  
export async function getAccountsByCustomer(customerId) {
    return await fetch(`/customers/${customerId}/accounts`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.error(error);
    });
  }
  