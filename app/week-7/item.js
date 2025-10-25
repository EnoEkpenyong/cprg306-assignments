export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-gray-900 max-w-sm">
      <div className="text-xl font-bold text-white">{name}</div>
      <div className="text-sm text-gray-400">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
