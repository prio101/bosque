import React from "react";
interface GreeterProps {
  name: string;
}
const Greeter: React.FC<GreeterProps> = (props: GreeterProps) => {
  const name = props.name;
  return (
    <section className="phx-hero">
      <h1 className="text-red-500 text-5xl font-bold text-center">Welcome to {name} with Typescript and React!</h1>
      <p>Peace-of-mind from prototype to production</p>
    </section>
  );
};
export default Greeter;