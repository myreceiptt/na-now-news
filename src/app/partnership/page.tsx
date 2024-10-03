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
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center gap-8">
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
            <h3 className="block text-sm sm:text-base text-yellow-now dark:text-green-now font-judul border-b border-dark-now dark:border-light-now">
              Use a permanent address in Universe of Reality where you can
              receive mail physically.
            </h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6">
              <div className="mt-4 col-span-full sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="text-sm sm:text-base font-judul"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="sm:mt-4 col-span-full sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="text-sm sm:text-base font-judul"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="email-address"
                  className="text-sm sm:text-base font-judul"
                >
                  Email address *
                </label>
                <div className="mt-2">
                  <input
                    id="email-address"
                    name="email-address"
                    type="email-address"
                    autoComplete="email-address"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="text-sm sm:text-base font-judul"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    id="street-address"
                    name="street-address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="col-span-full sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="text-sm sm:text-base font-judul"
                >
                  City *
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="city"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label
                  htmlFor="province"
                  className="text-sm sm:text-base font-judul"
                >
                  Province *
                </label>
                <div className="mt-2">
                  <input
                    id="province"
                    name="province"
                    type="text"
                    autoComplete="province"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="text-sm sm:text-base font-judul"
                >
                  Postal code *
                </label>
                <div className="mt-2">
                  <input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="country"
                  className="text-sm sm:text-base font-judul"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
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
            <h2 className="text-xl sm:text-2xl font-judul text-green-now dark:text-yellow-now">
              Organization / Company / Project Information
            </h2>
            <h3 className="block text-sm sm:text-base text-yellow-now dark:text-green-now font-judul border-b border-dark-now dark:border-light-now">
              We will always be selective when establishing partnerships. Please
              provide the information truthfully so we can consider it as best
              as possible.
            </h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6">
              <div className="mt-4 col-span-full">
                <label
                  htmlFor="organization-name"
                  className="text-sm sm:text-base font-judul"
                >
                  Organization / Company / Project name *
                </label>
                <div className="mt-2">
                  <input
                    id="organization-name"
                    name="organization-name"
                    type="text"
                    autoComplete="organization-name"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="website-address"
                  className="text-sm sm:text-base font-judul"
                >
                  Website address *
                </label>
                <div className="mt-2">
                  <input
                    id="website-address"
                    name="website-address"
                    type="text"
                    autoComplete="website-address"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="social-network"
                  className="text-sm sm:text-base font-judul"
                >
                  Social network *
                </label>
                <div className="mt-2">
                  <input
                    id="social-network"
                    name="social-network"
                    type="text"
                    autoComplete="social-network"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="partnership-interest"
                  className="text-sm sm:text-base font-judul"
                >
                  Partnership Interest *
                </label>
                <div className="mt-2">
                  <select
                    id="partnership-interest"
                    name="partnership-interest"
                    autoComplete="partnership-interest"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                    required
                  >
                    <option>IRL Events</option>
                    <option>Media Campaign</option>
                    <option>IRL Events & Media Campaign</option>
                  </select>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="marketing-budget"
                  className="text-sm sm:text-base font-judul"
                >
                  Marketing budget *
                </label>
                <div className="mt-2">
                  <select
                    id="marketing-budget"
                    name="marketing-budget"
                    autoComplete="marketing-budget"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
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
              <div className="col-span-full">
                <label
                  htmlFor="best-describes"
                  className="text-sm sm:text-base font-judul"
                >
                  Which category best describes your company / organization /
                  project?
                </label>
                <div className="mt-2">
                  <select
                    id="best-describes"
                    name="best-describes"
                    autoComplete="best-describes"
                    className="block w-full rounded-md ring-1 ring-dark-now dark:ring-light-now bg-transparent py-2 pl-1 placeholder:text-green-now dark:placeholder:text-yellow-now text-sm sm:text-base"
                  >
                    <option>Events</option>
                    <option>Marketing</option>
                    <option>Advertising</option>
                    <option>Media</option>
                    <option>Non Profit</option>
                    <option>Community</option>
                    <option>Cultural</option>
                    <option>Fashion</option>
                    <option>Sports</option>
                    <option>Gambling</option>
                    <option>Social</option>
                    <option>Music</option>
                    <option>Gaming</option>
                    <option>NFTs</option>
                    <option>Infrastructure</option>
                    <option>Crypto Coin</option>
                    <option>Art</option>
                    <option>Finance</option>
                    <option>Security</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-dark-now dark:border-light-now">
            <h2 className="text-xl sm:text-2xl font-judul text-green-now dark:text-yellow-now">
              Submit Your Request
            </h2>
            <h3 className="block text-sm sm:text-base text-yellow-now dark:text-green-now font-judul border-b border-dark-now dark:border-light-now">
              Double check your information. Make sure all information is
              correct. After you send the request, we will get back to you as
              soon as possible.
            </h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4">
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PartnerShip;
