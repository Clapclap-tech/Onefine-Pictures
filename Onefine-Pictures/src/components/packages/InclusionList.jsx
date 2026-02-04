import React from 'react'

const InclusionList = ({items}) => {
  return (
  <ul className="mt-4 space-y-2 text-sm text-gray-700">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2">
          <span className="font-semibold text-black">
            {item.qty}
          </span>

          <span>
            – {item.size} {item.subject}
            {item.style && ` (${item.style})`}
            {item.frame && ` with ${item.frame}`}
            {item.options && (
              <span className="text-gray-500">
                {" "}({item.options.join(", ")})
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default InclusionList