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
                            src="/images/mobile.png"
                            alt="mobile"
                            width={100}
                            height={100} />
                        </div>
                        <div ><p>Mobile</p></div>
                    </div>
                </Link>


                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/computer.png"
                            alt="computer"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Computer</p></div>
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
                            src="/images/office.png"
                            alt="office"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Office</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/sport.png"
                            alt="sport"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Sport</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/tv.png"
                            alt="tv"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>TV</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/audio.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Audio</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/robot-cleaner.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>RC</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/kitchen.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Kitchen</p></div>
                    </div>
                </Link>

                <Link href="/products" className="link-category">
                    <div className="category">
                        <div className="border-category">
                        <Image
                            src="/images/camera.png"
                            alt="games"
                            width={100}
                            height={100} />
                        </div>
                        <div><p>Camera</p></div>
                    </div>
                </Link>
                
            </div>

            
        </div>
    )
}