package lt.it.etalonas.Repositories;

import lt.it.etalonas.Kuponas.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponRepository extends JpaRepository<Coupon,Long> {
    Coupon save (Coupon coupon);

}
