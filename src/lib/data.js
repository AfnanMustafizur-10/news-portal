export const getCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const dataPromise = await res.json();
    const data = dataPromise.data.news_category;

    return data;
}
export const getNewsByCategoryId = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const dataPromise = await res.json();
    const data = dataPromise.data;

    return data;
}
export const getNewsDetailsById = async (news_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
    const dataPromise = await res.json();
    const data = dataPromise.data[0];

    return data;
}

