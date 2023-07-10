export default function NewsLetterSignUpForm() {
  const mailchimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  const hiddenFiled = process.env.NEXT_PUBLIC_MAILCHIMP_HIIDEN_INPUT;

  return (
    <>
      <h1 className="h1">
        We are experimenting with public beta. Subscribe to get involved and to
        access special deals.
      </h1>

      <form target="_blank" action={mailchimpUrl} method="post">
        <input
          id="email"
          name="EMAIL"
          placeholder="Email Address: you@are.awesome"
          required
          type="email"
          className="mt-4 block bg-white w-full border border-blue-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 xl:text-4xl"
        />
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-5000px" }}
        >
          <input type="text" name={hiddenFiled} tabIndex={-1} />
        </div>

        <button
          className="mt-4 w-full middle none text-center rounded-lg bg-blue-500 py-3.5 px-7 font-sans text-3xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-xl"
          type="submit"
        >
          {"✨ Subscribe 💌"}
        </button>
      </form>
      <h2 className="h2 mt-4">
        We will only send emails once there news are available, I promise. No
        spam.
      </h2>
    </>
  );
}
