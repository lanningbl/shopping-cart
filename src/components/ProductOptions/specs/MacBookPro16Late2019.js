import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import store from '../../../store';

const MacBookPro16Late2019 = ({ item, product }) => {
  const {
    state: { items },
  } = useContext(store);
  const [itemColor, setItemColor] = useState(item.color);
  const [itemProcessor, setItemProcessor] = useState(item.processor);
  const [itemStorage, setItemStorage] = useState(item.storage);
  const [itemMemory, setItemMemory] = useState(item.memory);
  const [itemGraphics, setItemGraphics] = useState(item.graphics);
  const [itemConfiguration, setItemConfiguration] = useState(item.configuration);
  const [lastChanged, setLastChanged] = useState();

  useEffect(() => {
    setItemColor(item.color);
    setItemProcessor(item.processor);
    setItemStorage(item.storage);
    setItemMemory(item.memory);
    setItemGraphics(item.graphics);
    setItemConfiguration(item.configuration);
  }, [item]);

  const findItem = items.find(
    (item) =>
      item.color === itemColor &&
      item.processor === itemProcessor &&
      item.storage === itemStorage &&
      item.memory === itemMemory &&
      item.graphics === itemGraphics &&
      item.configuration === itemConfiguration
  );
  if (
    findItem &&
    (item.color !== itemColor ||
      item.processor !== itemProcessor ||
      item.storage !== itemStorage ||
      item.memory !== itemMemory)
    // ||
    // item.graphisc !== itemGraphics ||
    // item.configuration !== itemConfiguration
  ) {
    return <Redirect to={`/product/${findItem.id}`} />;
  }

  if (!findItem && lastChanged) {
    let findFirstItem;
    if (lastChanged === 'processor') {
      findFirstItem = items.find((item) => item.processor === itemProcessor);
      return <Redirect to={`/product/${findFirstItem.id}`} />;
    } else if (lastChanged === 'storage') {
      findFirstItem = items.find((item) => item.storage === itemStorage);
      return <Redirect to={`/product/${findFirstItem.id}`} />;
    } else if (lastChanged === 'memory') {
      findFirstItem = items.find((item) => item.memory === itemMemory);
      return <Redirect to={`/product/${findFirstItem.id}`} />;
    } else if (lastChanged === 'graphics') {
      findFirstItem = items.find((item) => item.graphics === itemGraphics);
      return <Redirect to={`/product/${findFirstItem.id}`} />;
    } else if (lastChanged === 'configuration') {
      findFirstItem = items.find((item) => item.configuration === itemConfiguration);
      return <Redirect to={`/product/${findFirstItem.id}`} />;
    }
  }

  const checkAvailable = (before, after, type) => {
    if (before === after) return 'product-options__btn-active';
    let findAvailable;
    switch (type) {
      case 'processor':
        findAvailable = items.find(
          (item) =>
            item.color === itemColor &&
            item[type] === before &&
            item.storage === itemStorage &&
            item.memory === itemMemory &&
            item.graphics === itemGraphics &&
            item.configuration === itemConfiguration
        );
        break;
      case 'storage':
        findAvailable = items.find(
          (item) =>
            item.color === itemColor &&
            item.processor === itemProcessor &&
            item[type] === before &&
            item.memory === itemMemory &&
            item.graphics === itemGraphics &&
            item.configuration === itemConfiguration
        );
        break;
      case 'memory':
        findAvailable = items.find(
          (item) =>
            item.color === itemColor &&
            item.processor === itemProcessor &&
            item.storage === itemStorage &&
            item[type] === before &&
            item.graphics === itemGraphics &&
            item.configuration === itemConfiguration
        );
        break;
      case 'graphics':
        findAvailable = items.find(
          (item) =>
            item.color === itemColor &&
            item.processor === itemProcessor &&
            item.storage === itemStorage &&
            item.memory === itemMemory &&
            item[type] === before &&
            item.configuration === itemConfiguration
        );
        break;
      case 'configuration':
        findAvailable = items.find(
          (item) =>
            item.color === itemColor &&
            item.processor === itemProcessor &&
            item.storage === itemStorage &&
            item.memory === itemMemory &&
            item.graphics === itemGraphics &&
            item[type] === before
        );
        break;
      default:
        break;
    }
    if (findAvailable) return 'product-options__btn-inactive';
    return 'product-options__btn-unavailable';
  };

  return (
    <div>
      <div className='product-options__header'>Color</div>
      {product.colors.map((color, index) => (
        <button
          className={`${
            color === itemColor ? 'product-options__btn-active' : 'product-options__btn-inactive'
          }`}
          key={index}
          onClick={() => {
            setLastChanged('color');
            setItemColor(color);
          }}
        >
          {color}
        </button>
      ))}
      <div className='product-options__header'>Processor</div>
      {product.processors.map((processor, index) => (
        <button
          className={checkAvailable(processor, itemProcessor, 'processor')}
          key={index}
          onClick={() => {
            setLastChanged('processor');
            setItemProcessor(processor);
          }}
        >
          {processor}
        </button>
      ))}
      <div className='product-options__header'>Storage (SSD)</div>
      {product.storage.map((size, index) => (
        <button
          className={checkAvailable(size, itemStorage, 'storage')}
          key={index}
          onClick={() => {
            setLastChanged('storage');
            setItemStorage(size);
          }}
        >
          {size}
        </button>
      ))}
      <div className='product-options__header'>Memory</div>
      {product.memory.map((size, index) => (
        <button
          className={checkAvailable(size, itemMemory, 'memory')}
          key={index}
          onClick={() => {
            setLastChanged('memory');
            setItemMemory(size);
          }}
        >
          {size}
        </button>
      ))}
      <div className='product-options__header'>Graphics Card</div>
      {product.graphics.map((card, index) => (
        <button
          className={checkAvailable(card, itemGraphics, 'graphics')}
          key={index}
          onClick={() => {
            setLastChanged('graphics');
            setItemGraphics(card);
          }}
        >
          {card}
        </button>
      ))}
      <div className='product-options__header'>Configuration</div>
      {product.configurations.map((configuration, index) => (
        <button
          className={checkAvailable(configuration, itemConfiguration, 'configuration')}
          key={index}
          onClick={() => {
            setLastChanged('configuration');
            setItemConfiguration(configuration);
          }}
        >
          {configuration}
        </button>
      ))}
    </div>
  );
};

export default MacBookPro16Late2019;
