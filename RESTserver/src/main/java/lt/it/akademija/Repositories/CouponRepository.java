package lt.it.akademija.Repositories;

import lt.it.akademija.Kuponas.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponRepository extends JpaRepository<Coupon,Long> {
    Coupon save (Coupon coupon);

}
