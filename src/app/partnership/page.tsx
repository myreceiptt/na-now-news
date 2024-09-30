"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

function PartnerShip() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "792b0583-bc3e-4591-9ccf-030ec083f343");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col gap-8 p-8 pb-20 sm:p-20">
      <Header />
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-8 border-b border-dark-now dark:border-light-now">
        <form onSubmit={onSubmit}>
          <div className="space-y-12">
            <div className="border-b border-dark-now dark:border-light-now pb-12">
              <h2 className="text-xl sm:text-2xl font-judul">
                Partnership Form for Holder of BANANOW BASED NFTs
              </h2>
              <p className="mt-1 text-sm leading-6">
                Your information will be shared between Farmers and Heads of
                BANANOW.LAND so be careful what you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-full">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium leading-6"
                  >
                    Subject *
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        I want to partner with and do B2B for a
                      </span>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="profitable project."
                        autoComplete="subject"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6"
                  >
                    Tell us about your organization/company/project *
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="partnership"
                    className="block text-sm font-medium leading-6"
                  >
                    Also please write a few sentences about your partnership
                    request. *
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="partnership"
                      name="partnership"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="campaign"
                    className="block text-sm font-medium leading-6"
                  >
                    Now please descript in detail your campaign timeline, goals,
                    and needs. *
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="campaign"
                      name="campaign"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-dark-now dark:border-light-now pb-12">
              <h2 className="text-base font-semibold leading-7">
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

            <div className="border-b border-dark-now dark:border-light-now pb-12">
              <h2 className="text-base font-semibold leading-7">
                Organization / Company / Project Information
              </h2>
              <p className="mt-1 text-sm leading-6">
                We will always be selective when establishing partnerships.
                Please provide the information truthfully so we can consider it
                as best as possible.
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
                      autoComplete="organization-name s"
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
                        <label
                          htmlFor="gambling-betting"
                          className="font-medium"
                        >
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
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="fintech" className="font-medium">
                          Fintech
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6">
                    What type of partnership are you interested in?
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="irl-events"
                          name="irl-events"
                          type="radio"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="irl-events" className="font-medium">
                          IRL Events
                        </label>
                        <p className="">
                          Offline events in Universe of Reality, your reality,
                          your real life.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="media-campaign"
                          name="media-campaign"
                          type="radio"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="media-campaign" className="font-medium">
                          Media Campaign
                        </label>
                        <p className="">
                          Campaigns through multiple media in 0101 Universe and
                          Universe of Reality.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="both-event-media"
                          name="both-event-media"
                          type="radio"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="both-event-media"
                          className="font-medium"
                        >
                          Both
                        </label>
                        <p className="">
                          Only your budget can limit how greedy our partnership
                          can be rolled out.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6">
                    What is your marketing budget?
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="1000-2500"
                        name="1000-2500"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="1000-2500"
                        className="block text-sm font-medium leading-6"
                      >
                        $1,000 - $2,500
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="2500-5000"
                        name="2500-5000"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="2500-5000"
                        className="block text-sm font-medium leading-6"
                      >
                        $2,500 - $5,000
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="5000-10000"
                        name="5000-10000"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="5000-10000"
                        className="block text-sm font-medium leading-6"
                      >
                        $5,000 - $10,000
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="10000-25000"
                        name="10000-25000"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="10000-25000"
                        className="block text-sm font-medium leading-6"
                      >
                        $10,000 - $25,000
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="25000-50000"
                        name="25000-50000"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="25000-50000"
                        className="block text-sm font-medium leading-6"
                      >
                        $25,000 - $50,000
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="50000-100000"
                        name="50000-100000"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="50000-100000"
                        className="block text-sm font-medium leading-6"
                      >
                        $50,000 - $100,000
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="100000"
                        name="100000"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="100000"
                        className="block text-sm font-medium leading-6"
                      >
                        $100,000+
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Request
            </button>
          </div>
        </form>
        <span>{result}</span>
      </div>
      <Footer />
    </div>
  );
}

export default PartnerShip;
