export const FeedbackForm = () => {
  return (
    <form className="flex items-center flex-col">
      <label className="flex items-center flex-col">
        <span>Feedback:</span>
        <textarea className="text-black" />
      </label>
      <button>Submit</button>
    </form>
  );
};
