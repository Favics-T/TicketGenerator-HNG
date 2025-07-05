const TicketButton = ({ type, price, access, isSelected, onSelect }) => (
  <button
    className={`border-[#197686] px-4 py-3 border-2 rounded-xl cursor-pointer w-full mt-3 ${
      isSelected ? 'border-4' : ''
    }`}
    onClick={() => onSelect(type)}
  >
    <h5 className="font-bold text-white text-xl pb-2 text-start">{price}</h5>
    <p className="text-gray-300 text-sm text-start">{access}</p>
    <p className="text-gray-300 text-sm text-start">20/52</p>
  </button>
);