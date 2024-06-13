/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/Offer.module.css";

const Offer = () => {
  const textVariants = {
    offscreen: {
      opacity: 0,
      y: -100,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  const imageAnimate = {
    offscreen: {
      opacity: 0,
      scale: 0,
      transition: {
        type: "bounce",
        bounce: 0.4,
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "bounce",
        bounce: 0.4,
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const cardVariants = {
    offscreen: {
      y: -100,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        transition={{ staggerChildren: 0.5 }}
        className={styles.inner}
      >
        <motion.header
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.header}
        >
          <motion.h4 variants={textVariants}>Services</motion.h4>
          <motion.div
            variants={cardVariants}
            className={styles.lemon__ctn}
          >
            <Image
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
          </motion.div>
          <motion.h1 variants={textVariants}>What We Offer</motion.h1>
        </motion.header>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.card__ctn}
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={cardVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Building, Excavation & Construction</motion.h3>
              <motion.p variants={textVariants}>
                This is the standard Building, Excavation and Construction
              </motion.p>
            </motion.div>
            <div className={styles.card__img}>
              <img src="/images/construction.jpg" alt="construction" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={cardVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
             
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>General Cleaning Services</motion.h3>
              <motion.p variants={textVariants}>
                This is the standard cleaning offered in institutional offices.
              </motion.p>
            </motion.div>
            <div className={styles.card__img}>
              <img src="/images/cleaning.jpg" alt="cleaning" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={cardVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Detailed Cleaning Services</motion.h3>
              <motion.p variants={textVariants}>
                We pride ourselves on being the only providers in South Sudan.
                It is the art of cleaning an institution’s premises with approved chemicals
              </motion.p>
            </motion.div>
            <div className={styles.card__img}>
              <img src="/images/deep-cleaning.jpg" alt="deep cleaning" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={cardVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
             
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Scrubbing of Tile and Terrazzo floors</motion.h3>
              <motion.p variants={textVariants}>
                Proper scrubbing and cleaning using modern technology equipment.
              </motion.p>
            </motion.div>
            <div className={styles.card__img}>
              <img src="/images/cleaning.jpg" alt="cleaning" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={cardVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
             
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Fumigation and Pest control</motion.h3>
              <motion.p variants={textVariants}>
                We Fumigate aganist insects, crawling animals, and rodents.
              </motion.p>
            </motion.div>
            <div className={styles.card__img}>
              <img src="/images/cleaning.jpg" alt="cleaning" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={cardVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
             
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Bin Management Services</motion.h3>
              <motion.p variants={textVariants}>
                Our Bin Management Services ensure timely waste collection, thorough bin cleaning,
                and effective sanitization to maintain a clean and hygienic environment.              </motion.p>
            </motion.div>
            <div className={styles.card__img}>
              <img src="/images/cleaning.jpg" alt="cleaning" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </motion.div>
          
          
          
        </motion.section>
      </motion.div>
      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.large__img__ctn}
          >
            <motion.img
              variants={imageAnimate}
              src="/images/bajubi7.jpg"
              className={styles.large__img}
              alt=""
            />
          </motion.div>
    </div>
  );
};

export default Offer;
