import AddDonateForm from './AddDonateForm';
import AddUpcomingEvents from './AddUpcomingEvents';
import ContentReplacerAggregator from './ContentReplacerAggregator';
import AddUpcomingEventTile from './AddUpcomingEventTile';
import ReplaceContactForm from './ReplaceContactForm';

const contentReplacers = new ContentReplacerAggregator();
contentReplacers.add(new ReplaceContactForm());
contentReplacers.add(new AddDonateForm());
contentReplacers.add(new AddUpcomingEvents());
contentReplacers.add(new AddUpcomingEventTile());

export default contentReplacers;
