function CartItem({ cartItem, removeCart }) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{cartItem.title}</div>
        Rs.{cartItem.price}
      </div>
      <button
        onClick={() => {
          removeCart(cartItem);
        }}
        class="badge bg-primary rounded-bill"
      >
        Remove
      </button>
    </li>
  );
}

export default CartItem;
