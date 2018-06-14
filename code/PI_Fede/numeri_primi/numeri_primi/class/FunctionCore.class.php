<?php
/**
 * Created by PhpStorm.
 * User: crist
 * Date: 21-Mar-18
 * Time: 08:47
 */

class functionCore
{
    //Used for funzioni-io

    private $firstNum;
    private $secondNum;

    /**
     * @return mixed
     */
    public function getFirstNum()
    {
        return $this->firstNum;
    }

    /**
     * @param mixed $firstNum
     * @return functionCore
     */
    public function setFirstNum($firstNum)
    {
        $this->firstNum = $firstNum;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getSecondNum()
    {
        return $this->secondNum;
    }

    /**
     * @param mixed $secondNum
     * @return functionCore
     */
    public function setSecondNum($secondNum)
    {
        $this->secondNum = $secondNum;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getX()
    {
        return $this->x;
    }

    /**
     * @param mixed $x
     * @return functionCore
     */
    public function setX($x)
    {
        $this->x = $x;
        return $this;
    }
    private $x;

    /**
     * functionCore constructor.
     */
    public function __construct()
    {
        $this->firstNum = rand(2,10);
        $this->secondNum = rand(2,10);
        $this->x = rand(2,5);
    }


    public function getResult(){
        $result = $this->getFirstNum() * $this->getX() - $this->getSecondNum();

        return $result;
    }

}