import React from "react";

const CampersList = ({ items }) => {
  const campers = items?.items || [];
  //   console.log(items);

  //   if (!items.length) {
  //     return <p>No campers found</p>;
  //   }
  return (
    <div>
      <ul>
        {campers.map((item) => (
          <li key={item.id}>
            <img
              src={item.gallery.thumb?.thumb || []}
              alt={item.name}
              width={200}
            />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
