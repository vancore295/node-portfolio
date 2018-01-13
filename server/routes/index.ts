import setMenuRoutes from './menu';
import setShopRoutes from './shop';
import setOrderRoutes from './order';
import setMablibRoutes from './madlib';

export default function initRoutes(app) {
    setMenuRoutes(app);
    setShopRoutes(app);
    setOrderRoutes(app);
    setMablibRoutes(app);
}
