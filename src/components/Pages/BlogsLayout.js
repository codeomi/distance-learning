import React from 'react'
import "./blogslayout.scss"
import NewsletterCard from '../Cards/NewsletterCard'
import NewsLetterBigCard from '../Cards/NewsLetterBigCard'

const BlogsLayout = () => {
  return (
    <>
    <div className="blogs-layout">
        <div className="blogs-heading">Blogs</div>
        <div className="blogs-container">
        <NewsLetterBigCard heading="How online learning can power lifelong goals"></NewsLetterBigCard>
        <NewsLetterBigCard heading="How online learning can power lifelong goals"></NewsLetterBigCard>
        <NewsLetterBigCard heading="How online learning can power lifelong goals"></NewsLetterBigCard>
        <NewsLetterBigCard heading="How online learning can power lifelong goals"></NewsLetterBigCard>
        <NewsLetterBigCard heading="How online learning can power lifelong goals"></NewsLetterBigCard>
        <NewsLetterBigCard heading="How online learning can power lifelong goals"></NewsLetterBigCard>
        <NewsLetterBigCard heading="How online learning can power lifelong goals"></NewsLetterBigCard>
        </div>
    </div>
    </>
  )
}

export default BlogsLayout