import React from "react";
import LottieSection from "./LottieSection";

const SummerCare = () => {
  return (
    <div className="my-20 px-3 md:px-0">
      <h2 className="text-xl lg:text-3xl font-bold text-gray-600 mb-15 text-center">
        Summer Care Tips
      </h2>
      {/* container */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
        <div className="order-2 md:order-1">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              1. How can I protect my skin during summer?
            </div>
            <div className="collapse-content text-sm">
              Use a broad-spectrum SPF 30 or higher sunscreen, wear lightweight
              clothing, and stay hydrated to help protect your skin from the
              summer sun.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              2. What skincare products are best for summer?
            </div>
            <div className="collapse-content text-sm">
              Lightweight moisturizers, gentle cleansers, sunscreen, and
              hydrating serums are great choices for keeping your skin fresh and
              comfortable.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              3. How often should I apply sunscreen?
            </div>
            <div className="collapse-content text-sm">
              Apply sunscreen before going outdoors and reapply at least every
              two hours, or more often after swimming, sweating, or towel
              drying.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              4. How can I keep my skin hydrated in hot weather?
            </div>
            <div className="collapse-content text-sm">
              Drink plenty of water and use a lightweight, hydrating moisturizer
              to help maintain your skins moisture balance.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              5. What fabrics are best for summer clothing?
            </div>
            <div className="collapse-content text-sm">
              Cotton, linen, and other breathable fabrics help improve airflow
              and keep you comfortable in hot and humid weather.
            </div>
          </div>
        </div>
        {/* section-2 */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <LottieSection></LottieSection>
        </div>
      </div>
    </div>
  );
};

export default SummerCare;
