import { Fragment } from "react";

import { titleError, bodyError } from "@/app/lib/constants";
import { State } from "@/app/lib/definitions";


export function FormError({
  state,
  errorType,
}: {
  state: State,
  errorType: string,
}) {
  if (!state?.errors || !errorType) return null;

  let errorsList: string[] = [];

  if (errorType === titleError && state.errors?.title) {
    errorsList = state.errors.title;
  } else if (errorType === bodyError && state.errors?.body) {
    errorsList = state.errors.body;
  }

  return errorsList.map((error) => (
    <Fragment key={error}>
      <FormMessage error={error} errorType={errorType} />
    </Fragment>
  ));
};


function FormMessage({ error, errorType }: { error?: string, errorType?: string }) {
  if (!error) return null;

  return (
    <div
      id={errorType}
      aria-live="polite"
      aria-atomic="true"
    >
      <p className="mt-2 text-sm text-red-500">
        {error}
      </p>
    </div>
  );
};
