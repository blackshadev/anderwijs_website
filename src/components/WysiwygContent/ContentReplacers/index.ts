import AddDonateForm from './AddDonateForm';
import AddUpcomingEvents from './AddUpcomingEvents';
import ContentReplacerAggregator from './ContentReplacerAggregator';
import ReplaceContactForm from './ReplaceContactForm';

const contentReplacers = new ContentReplacerAggregator();
contentReplacers.add(new ReplaceContactForm());
contentReplacers.add(new AddDonateForm());
contentReplacers.add(new AddUpcomingEvents());

export default contentReplacers;
