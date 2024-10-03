"use client";
import React from "react";

function PartnerShip() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "792b0583-bc3e-4591-9ccf-030ec083f343");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully.");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error...", data);
      setResult(data.message);
    }
  };

  return (
    <div className="mx-auto max-w-3xl flex flex-col items-center gap-8">
      <form
        onSubmit={onSubmit}
        className="border-b border-dark-now dark:border-light-now"
      >
        <div className="">
          <div className="border-b border-dark-now dark:border-light-now pb-4">
            <h2 className="text-xl sm:text-2xl font-judul text-green-now dark:text-yellow-now">
              Partnership Request Form
            </h2>
            <h3 className="block text-sm sm:text-base text-yellow-now dark:text-green-now font-judul border-b border-dark-now dark:border-light-now">
              Your information will be shared between Farmers and Heads of
              BANANOW.LAND so be careful what you share.
            </h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4">
              <div className="mt-4 col-span-full">
                <label
                  htmlFor="subject"
                  className="text-sm sm:text-base font-judul"
                >
                  Subject *
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md ring-1 ring-dark-now dark:ring-light-now">
                    <span className="flex select-none items-center pl-2 text-sm sm:text-base">
                      Be partner for a
                    </span>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="valuable..."
                      autoComplete="subject"
                      className="bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base block flex-1"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm sm:text-base font-judul"
                >
                  Tell us about your organization/company/project *
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    placeholder="We are..."
                    className="block w-full bg-transparent rounded-md py-2 pl-2 ring-1 ring-dark-now dark:ring-light-now placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="partnership"
                  className="block text-sm sm:text-base font-judul"
                >
                  Write a few sentences about your partnership request. *
                </label>
                <div className="mt-2">
                  <textarea
                    id="partnership"
                    name="partnership"
                    rows={3}
                    placeholder="We want..."
                    className="block w-full bg-transparent rounded-md py-2 pl-2 ring-1 ring-dark-now dark:ring-light-now placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="campaign"
                  className="block text-sm sm:text-base font-judul"
                >
                  Descript your campaign timeline, goals, and needs. *
                </label>
                <div className="mt-2">
                  <textarea
                    id="campaign"
                    name="campaign"
                    rows={3}
                    placeholder="Our campaign..."
                    className="block w-full bg-transparent rounded-md py-2 pl-2 ring-1 ring-dark-now dark:ring-light-now placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-dark-now dark:border-light-now pb-4">
            <h2 className="text-xl sm:text-2xl font-judul text-green-now dark:text-yellow-now">
              Your Information
            </h2>
            <p className="mt-1 text-sm leading-6">
              Use a permanent address in Universe of Reality where you can
              receive mail physically.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-full">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium leading-6"
                >
                  Email address *
                </label>
                <div className="mt-2">
                  <input
                    id="email-address"
                    name="email-address"
                    type="email-address"
                    autoComplete="email-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    id="street-address"
                    name="street-address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6"
                >
                  City *
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="city"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="province"
                  className="block text-sm font-medium leading-6"
                >
                  State / Province *
                </label>
                <div className="mt-2">
                  <input
                    id="province"
                    name="province"
                    type="text"
                    autoComplete="province"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6"
                >
                  ZIP / Postal code *
                </label>
                <div className="mt-2">
                  <input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-full">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>ENDHONESA</option>
                    <option>INDONESIA</option>
                    <option>Foreigner</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-dark-now dark:border-light-now pb-4">
            <h2 className="text-base font-semibold leading-7">
              Organization / Company / Project Information
            </h2>
            <p className="mt-1 text-sm leading-6">
              We will always be selective when establishing partnerships. Please
              provide the information truthfully so we can consider it as best
              as possible.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="organization-name"
                  className="block text-sm font-medium leading-6"
                >
                  Organization / Company / Project name *
                </label>
                <div className="mt-2">
                  <input
                    id="organization-name"
                    name="organization-name"
                    type="text"
                    autoComplete="organization-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="website-address"
                  className="block text-sm font-medium leading-6"
                >
                  Website address *
                </label>
                <div className="mt-2">
                  <input
                    id="website-address"
                    name="website-address"
                    type="text"
                    autoComplete="website-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="social-network"
                  className="block text-sm font-medium leading-6"
                >
                  Social network *
                </label>
                <div className="mt-2">
                  <input
                    id="social-network"
                    name="social-network"
                    type="text"
                    autoComplete="social-network"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6"
                >
                  Partnership Interest *
                </label>
                <div className="mt-2">
                  <select
                    id="partnership-interest"
                    name="partnership-interest"
                    autoComplete="partnership-interest"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                  >
                    <option>IRL Events</option>
                    <option>Media Campaign</option>
                    <option>IRL Events & Media Campaign</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="marketing-budget"
                  className="block text-sm font-medium leading-6"
                >
                  Marketing budget *
                </label>
                <div className="mt-2">
                  <select
                    id="marketing-budget"
                    name="marketing-budget"
                    autoComplete="marketing-budget"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                  >
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000++++</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6">
                  Which category best describes your company / organization /
                  project? (please select no more than three)
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="events"
                        name="events"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="events" className="font-medium">
                        Events
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="marketing-advertising"
                        name="marketing-advertising"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="marketing-advertising"
                        className="font-medium"
                      >
                        Marketing/Advertising
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="media"
                        name="media"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="media" className="font-medium">
                        Media
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="non-profit"
                        name="non-profit"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="non-profit" className="font-medium">
                        Non Profit
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="community-culture"
                        name="community-culture"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="community-culture"
                        className="font-medium"
                      >
                        Community Culture
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="social"
                        name="social"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="social" className="font-medium">
                        Social
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="music"
                        name="music"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="music" className="font-medium">
                        Music
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="fashion"
                        name="fashion"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="fashion" className="font-medium">
                        Fashion
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="gambling-betting"
                        name="gambling-betting"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="gambling-betting" className="font-medium">
                        Gambling/Betting
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="gaming"
                        name="gaming"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="gaming" className="font-medium">
                        Gaming
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="sports"
                        name="sports"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="sports" className="font-medium">
                        Sports
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="nft"
                        name="nft"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="nft" className="font-medium">
                        NFT
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="infrastructure"
                        name="infrastructure"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="infrastructure" className="font-medium">
                        Infrastructure
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="crypto"
                        name="crypto"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="crypto" className="font-medium">
                        Crypto
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="art"
                        name="art"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="art" className="font-medium">
                        Art
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="fintech"
                        name="fintech"
                        type="checkbox"
                        className="h-4 w-4 rounded border-dark-now dark:border-light-now text-yellow-now dark:text-green-now focus:ring-green-now dark:focus:ring-yellow-now"
                      />
                    </div>
                    <div className="text-sm sm:text-base">
                      <label htmlFor="fintech">Fintech</label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end gap-2 mb-8">
          <h5 className="text-sm sm:text-base">{result}</h5>
          <button
            type="button"
            className="bg-dark-now dark:bg-light-now text-light-now dark:text-dark-now px-4 py-1 rounded-full text-xs sm:text-sm hover:bg-yellow-now dark:hover:bg-green-now focus:bg-green-now dark:focus:bg-yellow-now hover:text-dark-now dark:hover:text-light-now focus:text-light-now dark:focus:text-dark-now"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-dark-now dark:bg-light-now text-light-now dark:text-dark-now px-4 py-1 rounded-full text-xs sm:text-sm hover:bg-yellow-now dark:hover:bg-green-now focus:bg-green-now dark:focus:bg-yellow-now hover:text-dark-now dark:hover:text-light-now focus:text-light-now dark:focus:text-dark-now"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
}

export default PartnerShip;
