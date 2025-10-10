import React from "react";
import "./categories.css";
import Image from "next/image";
import Link from "next/link";

export default function Categories(){
    return(
        <div className="categories">
            <div className="text-popular"><p> Popular Categories</p></div>
            <div className="wrap-categories">
                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div ><p>Gaming</p></div>
                    </div>
                </Link>


                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Gaming</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Gaming</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Gaming</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Gaming</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Gaming</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Gaming</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Gaming</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Gaming</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/games.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Gaming</p></div>
                    </div>
                </Link>
                
            </div>

            
        </div>
    )
}