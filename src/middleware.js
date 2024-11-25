import { authMiddleware } from "./middleware/auth";
export function middleware(req) {
    const middlewares = [authMiddleware];
  
    for (const middleware of middlewares) {
      const result = middleware(req);
      if (result instanceof Response) {
        return result; 
      }
    }
  
    return NextResponse.next(); 
  }