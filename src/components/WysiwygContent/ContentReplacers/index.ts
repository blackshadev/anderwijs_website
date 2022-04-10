import AddDonateForm from './AddDonateForm';
import ContentReplacerAggregator from './ContentReplacerAggregator';
import ReplaceContactForm from './ReplaceContactForm';

const contentReplacers = new ContentReplacerAggregator();
contentReplacers.add(new ReplaceContactForm());
contentReplacers.add(new AddDonateForm());

export default contentReplacers;
