/* eslint-disable-next-line */
export interface SharedGreeterProps {
  name: string;
}

export function SharedGreeter(props: SharedGreeterProps) {
  const { name } = props;

  return (
    <div>
      <h1>Welcome to SharedGreeter! {name}</h1>
    </div>
  );
}

export default SharedGreeter;
