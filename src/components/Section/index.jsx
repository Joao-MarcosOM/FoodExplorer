import { useState, useRef, useEffect } from 'react';
import { Container } from './styles';
import { PiCaretRightBold, PiCaretLeftBold } from 'react-icons/pi';

export function Section({ title, children }) {
  const listRef = useRef(null);
  const [showCarousel, setShowCarousel] = useState(false);
  
  const scrollLeft = () => {
    const container = listRef.current;
    if (container) {
      const children = container.children;
      const lastChild = children[children.length - 1];
      container.removeChild(lastChild);
      container.insertBefore(lastChild, children[0]);
    }
  };

  const scrollRight = () => {
    const container = listRef.current;
    if (container) {
      const children = container.children;
      const firstChild = children[0];
      container.removeChild(firstChild);
      container.appendChild(firstChild);
    }
  };
  
  useEffect(() => {
    const container = listRef.current;
    if (container) {
      const childrenCount = container.children.length;
      setShowCarousel(childrenCount > 3);
    }
  }, [children]);
  return (
    <Container>
      <h2>{title}</h2>
      <div className={`listItens ${showCarousel ? 'show-carousel' : ''}`} ref={listRef}>
        {children}
      </div>
        {showCarousel && 
            <div className="gradientLeft">
                <PiCaretLeftBold id="leftArrow" onClick={scrollLeft} />
            </div>
        }
        {showCarousel && 
            <div className="gradientRight">
                <PiCaretRightBold id="rightArrow" onClick={scrollRight} />
            </div>
        }
    </Container>
  );
}
