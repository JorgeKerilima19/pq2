const assetContent = [
  {
    title: "Private Groups",
    content:
      "We organize tours for private groups, tailored to your specific interests and needs.",
  },
  {
    title: "Family-Like Care:",
    content:
      "Every client is treated like part of our family, ensuring a warm and personalized experience.",
  },
  {
    title: "Affordability",
    content:
      "We offer competitive and reasonable prices so everyone can enjoy a memorable experience",
  },
  {
    title: "Focus on Rural Community Tourism",
    content:
      "We support local communities and showcase both well-known tourist destinations and new, less-visited places full of mystery and history.",
  },
  {
    title: "Payment Options",
    content:
      "We accept PayPal, credit cards, and Western Union for your convenience and security",
  },
  {
    title: "Flexible Scheduling:",
    content:
      "Our schedules can be flexible to suit your pace. We take the necessary time on each tour to ensure you have a complete and satisfying experience at your own pace.",
  },
];

export const Assets = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-4 justify-center bg-gray-200 p-10">
      {assetContent.map((el, i) => (
        <div className="py-4" key={i}>
          <h4 className="font-bold text-green-400 text-lg">{el.title}</h4>
          <p>{el.content}</p>
        </div>
      ))}
    </div>
  );
};
