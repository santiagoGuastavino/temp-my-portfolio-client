interface Props {
  submit: boolean;
}

export default function useContactForm({ submit }: Props): void {
  if (submit) {
    console.log("BEEN SUBMITED");
  }
}
