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
    private $x;

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


    /**
     * functionCore constructor.
     */
    public function __construct()
    {
        $this->firstNum = rand(2,10)*(pow(-1,rand(1,2)));
        $this->secondNum = rand(2,10)*(pow(-1,rand(1,2)));
        $this->x = rand(2,5);
    }

    //Used to check if matched by userInput
    public function getResult(){
        $result = $this->getFirstNum() * $this->getX() + $this->getSecondNum();

        return $result;
    }

}