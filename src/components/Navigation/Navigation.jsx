return (
    <div className={css.card}>
      <img className={css.img} src={advert.gallery[0]} alt={advert.name} />
    
      <div className={css.camperInfoConteiner}>
        <div className={css.info}>
          <div className={css.infoPrice}>
            <p className={css.name}>{advert.name}</p>
            <div className={css.like}>
             <p className={css.price}>€ {advert.price.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

               <button onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
            </div>
          </div>
          <LocationReviewsInfo advert={advert} />
        </div>
        <p className={css.camperDescription}>{advert.description}</p>
        <Categories
          advert={advert}
          
        />
        <button onClick={() => setIsModalOpen(true)}>Show more</button>
    </div>
    
       <CamperModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        camper={advert}
      />
    </div>
  );
};