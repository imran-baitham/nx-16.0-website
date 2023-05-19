import { SharedGreeter } from '@nx-mono-website/shared/greeter';

export function NxWelcome({ title }: { title: string }) {
  return (
    <div>
      <h1>
        <span> Hello there, </span>
        Welcome {title} 👋
      </h1>
      <SharedGreeter name="Imran Baitham" />
    </div>
  );
}

export default NxWelcome;
