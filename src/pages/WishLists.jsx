import React from 'react';
import './css/wishList.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/actions';

export default function Wishlist() {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    // TODO:后期优化成后端获取数据，防止一些路径问题
    <div className="wishlist-container">
      <h3 className="wishlist-title">心愿单</h3>
      <p>后期优化成后端获取数据,图片暂不展示</p>
      {wishlist.length === 0 ? (
        <p className="wishlist-message">您的心愿单为空。</p>
      ) : (
        <ul className="wishlist-list">
          {wishlist.map((item) => (
            <li key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <div className="wishlist-item-details">
                <p className="wishlist-item-name">{item.name}</p>
                <button className="wishlist-item-remove" onClick={() => handleRemoveFromWishlist(item.id)}>移除</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
