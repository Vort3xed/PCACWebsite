import React from 'react';

interface TimelineItemProps {
  title: string;
  content: string;
  image?: string;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, content, image }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      {image && <img src={image} alt={title} className="timeline-item-image" />}
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem 
          key={index} 
          title={item.title} 
          content={item.content} 
          image={item.image} 
        />
      ))}
    </div>
  );
};

export default Timeline;
