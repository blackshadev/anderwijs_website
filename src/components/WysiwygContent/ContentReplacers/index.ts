import ContentReplacerAggregator from './ContentReplacerAggregator';
import ReplaceContactForm from './ReplaceContactForm';

const contentReplacers = new ContentReplacerAggregator();
contentReplacers.add(new ReplaceContactForm());

export default contentReplacers;
