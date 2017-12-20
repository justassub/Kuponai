package lt.it.etalonas;

import org.apache.log4j.Logger;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Service;

@Service
public class PostProcessor implements BeanPostProcessor{

    private  static  Logger logger=Logger.getLogger(PostProcessor.class);
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        logger.warn("before Bean : "+beanName +" initialization");
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        logger.warn("After Bean " +beanName+" initialization");
        return bean;
    }
}
