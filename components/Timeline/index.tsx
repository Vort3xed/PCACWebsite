import React from 'react';

interface TimelineItemProps {
  title: string;
  titleUrl?: string;
  content?: string;
  image?: string;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, titleUrl, content, image }) => {
  console.log(titleUrl);
  if (titleUrl !== undefined) {
    return (
      <div className="timeline-item">
        <div className="timeline-item-content">
          <h2><a href={titleUrl} target="_blank" rel="noreferrer nofollow">{title}</a></h2>
          <p>{content}</p>
        </div>
        {image && <img src={image} alt={title} className="timeline-item-image" />}
      </div>
    );
  } else {
    return (
      <div className="timeline-item">
        <div className="timeline-item-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        {image && <img src={image} alt={title} className="timeline-item-image" />}
      </div>
    );
  }
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          titleUrl={item.titleUrl}
          title={item.title}
          content={item.content}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Timeline;
