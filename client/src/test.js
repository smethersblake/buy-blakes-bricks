<div>
{state.cart.map(item => (
  <CartItem key={item._id} item={item} />
))}
<div className="flex-row space-between">
  <strong>Total: ${calculateTotal()}</strong>
  {
  Auth.loggedIn() ?
    <div clasName="items-left">
      <button className="bg-transparent hover:bg-neutral-500 text-nuetral-700 font-semibold hover:text-white py-2 px-4 border border-neutral-500 hover:border-transparent rounded">
      Checkout
      </button>
    </div>  
      :
      <span>(log in to check out)</span>
  }
</div>
</div>    
