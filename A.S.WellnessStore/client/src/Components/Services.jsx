import React from "react";

const Services = () => {
  const ServiceData = [
    {
      content: "Branded & Generic Medicines",
      imageUrl:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      content: "Surgical & Medical Equipment",
      imageUrl:
        "https://images.unsplash.com/photo-1655313719493-16ebe4906441?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      content: "Baby & Mother Care Products",
      imageUrl:
        "https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      content: "Diabetic & BP Care Range",
      imageUrl:
        "https://images.unsplash.com/photo-1685660478073-ab6b01a529cf?q=80&w=1056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      content: "Ayurvedic & Wellness Products",
      imageUrl:
        "https://images.unsplash.com/photo-1642764732251-9dacf60eb423?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section id="Services">
      <h3 className=" font-bold text-4xl my-8">What We Offer</h3>
      <div className="crousal grid grid-flow-col grid-cols-[300px_300px_300px_300px_300px] h-80 gap-3 overflow-x-scroll snap-x snap-mandatory scroll-smooth  pb-3">
        {ServiceData.map((service, index) => (
          <ServiceCard
            key={index}
            content={service.content}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ content, imageUrl }) => {
  return (
    <div className="h-full w-fit rounded-2xl overflow-hidden snap-center">
      <div
        className="rounded-xl snap-center bg-cover bg-no-repeat h-full w-72 flex items-end justify-center "
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: "center",
        }}
      >
        <p className="text-white font-bold tracking-wide text-xl bg-fuchsia-300 w-full h-1/3 pt-4 px-5 text-center">{content}</p>
      </div> 
    </div>
  );
};
