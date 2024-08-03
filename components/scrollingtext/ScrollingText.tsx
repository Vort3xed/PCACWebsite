import React, { useEffect, useRef } from 'react';


const ScrollingText: React.FC = () => {
    const scrollingContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollingContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollingContainerRef.current;
        if (scrollLeft >= scrollWidth / 2) {
          scrollingContainerRef.current.scrollLeft = 0;
        } else {
          scrollingContainerRef.current.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="unique-scroller">
      <div className="unique-scrolling-content">
        <div className="unique-block">In 2020, over 8000 students signed a petition, delivered to Pres. Daniels, calling on Purdue to commit to decarbonizing</div>
        <div className="unique-block">Purdue's Physical Facilities team (not an official university policy) has a Master Plan to cut emissions by 50% by 2025 (with 2011 as the base-year). As of Fiscal Year 2022, we have achieved 15% reductions.</div>
        <div className="unique-block">All three governmental bodies at Purdue (Purdue Student Government, Purdue Graduate Student Government, and the University Senate) passed resolutions calling on Purdue to commit to decarbonizing</div>
        <div className="unique-block">The Association for Advancement of Sustainability in Higher Education (AASHE)'s report on Purdue gave us a score of 0 out of 4 on “Clean and Renewable Energy”?</div>
        <div className="unique-block">As of Fiscal Year 2022, each year the Purdue community was responsible for 11 metric tons of CO2/person</div>
        <div className="unique-block">Purdue's emission are the equivalent to each person at Purdue driving an average car 28,200 miles/year</div>
        <div className="unique-block">The Wade Power Plant on campus generates 50% of the campus's power</div>
        <div className="unique-block">Between the power produced on campus and the power Purdue purchases, we were responsible for 516,000 metric tons of CO2 in Fiscal Year 2022</div>
        <div className="unique-block">Purdue's annual emissions are the equivalent of 115,000 gasoline-powered vehicles being driven/year</div>
        <div className="unique-block">Purdue's annual emissions are equivalent to the emissions from electricity use in 100,400 homes</div>
        <div className="unique-block">Purdue's annual emissions are the equivalent to charging 62,767,605,489 smart phones</div>
        <div className="unique-block">Of the 1194 vehicles in Purdue's campus fleet, 21 are electric or hybrid</div>

        <div className="unique-block">In 2020, over 8000 students signed a petition, delivered to Pres. Daniels, calling on Purdue to commit to decarbonizing</div>
        <div className="unique-block">Purdue's Physical Facilities team (not an official university policy) has a Master Plan to cut emissions by 50% by 2025 (with 2011 as the base-year). As of Fiscal Year 2022, we have achieved 15% reductions.</div>
        <div className="unique-block">All three governmental bodies at Purdue (Purdue Student Government, Purdue Graduate Student Government, and the University Senate) passed resolutions calling on Purdue to commit to decarbonizing</div>
        <div className="unique-block">The Association for Advancement of Sustainability in Higher Education (AASHE)'s report on Purdue gave us a score of 0 out of 4 on “Clean and Renewable Energy”?</div>
        <div className="unique-block">As of Fiscal Year 2022, each year the Purdue community was responsible for 11 metric tons of CO2/person</div>
        <div className="unique-block">Purdue's emission are the equivalent to each person at Purdue driving an average car 28,200 miles/year</div>
        <div className="unique-block">The Wade Power Plant on campus generates 50% of the campus's power</div>
        <div className="unique-block">Between the power produced on campus and the power Purdue purchases, we were responsible for 516,000 metric tons of CO2 in Fiscal Year 2022</div>
        <div className="unique-block">Purdue's annual emissions are the equivalent of 115,000 gasoline-powered vehicles being driven/year</div>
        <div className="unique-block">Purdue's annual emissions are equivalent to the emissions from electricity use in 100,400 homes</div>
        <div className="unique-block">Purdue's annual emissions are the equivalent to charging 62,767,605,489 smart phones</div>
        <div className="unique-block">Of the 1194 vehicles in Purdue's campus fleet, 21 are electric or hybrid</div>

      </div>
    </div>
  );
};

export default ScrollingText;
