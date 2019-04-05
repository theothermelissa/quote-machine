import quoteList from '../common/quoteList';

export const QuoteText = (quote) => quoteList[quote].statement;

export const QuoteAuthor = (quote) => quoteList[quote].speaker;

export const TweetableQuote = (quote) => QuoteText(quote) + " " + QuoteAuthor(quote);